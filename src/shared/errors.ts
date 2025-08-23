const mapedErrors = {
    INVALID_ID: "Invalid ID",
    DATABASE: "Error fetching from database",
    VALIDATION_ERROR: "Validation error",
    UNKNOWN: "Unknown error"
} as const

type Errors = keyof typeof mapedErrors

export class APIError extends Error {
    status: number;

    constructor(message: Errors, status: number, cause?: string) {
        super(mapedErrors[message], { cause })
        this.status = status
    }

    toJSON() {
        return {
            status: this.status,
            error: this.message,
            cause: this.cause
        }
    }
}

export function inferMessage(error: unknown) {
    if (error instanceof APIError) {
        return error.message
    }

    if (error instanceof Error) {
        return error.message
    }

    return "Unexped error"
}