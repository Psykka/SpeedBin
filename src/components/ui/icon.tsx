type ResponsiveIconProps = {
    icon: React.ComponentType<any>;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    className?: string;
}

const sizeClasses = {
    xs: 'w-4 h-4 sm:w-4 sm:h-4',
    sm: 'w-5 h-5 sm:w-5 sm:h-5',
    md: 'w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6',
    lg: 'w-7 h-7 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8',
    xl: 'w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9',
    '2xl': 'w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14'
};

export const ResponsiveIcon: React.FC<ResponsiveIconProps> = ({
    icon: Icon,
    size = 'md',
    className = ''
}) => {
    return (
        <Icon
            className={`${sizeClasses[size]} ${className}`}
        />
    );
};