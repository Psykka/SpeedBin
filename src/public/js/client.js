const buttons = {
  home: document.getElementsByClassName('boxtop')[0],
  save: document.getElementById('save'),
  new: document.getElementById('new'),
  edit: document.getElementById('edit'),
  share: document.getElementById('share'),
  raw: document.getElementById('raw'),
  bug: document.getElementById('bug')
}

const editor = CodeMirror.fromTextArea(document.getElementById('textarea'), {
  mode: 'text/javascript',
  lineNumbers: true,
  lineWrapping: true
})

const codeID = window.location.pathname

if (codeID != '/') {
  const div = document.getElementsByTagName('header')[0].appendChild(document.createElement('div'))
  div.classList.add('load')
  div.innerHTML = '<spam>Loading</spam>'
  fetch(`/raw${codeID}?noHTML=true`)
    .then(res => {
      if (res.status == 400) { window.location.href = '/'; return };

      div.parentNode.removeChild(div)
      return res.text()
    })
    .then(code => {
      editor.getDoc().setValue(code || '')
    })

  editor.getWrapperElement().classList.add('CodeMirror-readonly')
  disableButtons(['save'])
  editor.setOption('readOnly', true)
} else disableButtons(['new', 'edit', 'share', 'raw'])

buttons.save.onclick = async function () {
  const code = editor.getValue()
  if (!code) return
  await fetch('/documents', { method: 'POST', body: code })
    .then(res => res.json())
    .then(data => window.location.href = `/${data.id}`)
}

buttons.edit.onclick = function () {
  disableButtons(['edit', 'raw'])
  enableButtons('save')

  editor.getWrapperElement().classList.remove('CodeMirror-readonly')
  editor.setOption('readOnly', false)
}

buttons.share.onclick = function () {
  buttons.share.disabled = true
  const element = document.createElement('input')

  const div = document.getElementsByTagName('header')[0].appendChild(document.createElement('div'))
  div.classList.add('alert')
  div.innerHTML = '<spam>Copied to clipboard!</spam>'

  document.body.appendChild(element)
  element.value = `${window.location.href}`
  element.select()
  document.execCommand('copy')

  setTimeout(_ => { div.parentNode.removeChild(div); buttons.share.disabled = false }, 3000)
  document.body.removeChild(element)
}

buttons.new.onclick = function () { window.location.href = '/' }
buttons.raw.onclick = function () { window.location.href = `/raw${codeID}` }
buttons.bug.onclick = function () { window.open('https://github.com/Psykka/SpeedBin/issues') }
buttons.home.onclick = function () { window.location.href = '/readme' }

function disableButtons (ctx) {
  for (const button of ctx) {
    buttons[button].className = 'disable'
    buttons[button].disabled = true
  }
}

function enableButtons (ctx) {
  ctx = Array.isArray(ctx) ? ctx : [ctx]
  for (const button of ctx) {
    buttons[button].classList.remove('disable')
    buttons[button].disabled = false
  }
}
