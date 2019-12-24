const elements = {
  buttons: {
    save: document.getElementById('save'),
    new: document.getElementById('new'),
    edit: document.getElementById('edit'),
    share: document.getElementById('share'),
    raw: document.getElementById('raw'),
  },
  textArea: document.getElementById('textarea'),  
}

if(window.location.href.split('/').pop()){
  axios.get(`/raw/${window.location.href.split('/').pop()}`).then(function({data}){ 
    if(!data) return;
    elements.textArea.disabled = true;
    elements.buttons.save.className = 'disable';
    elements.buttons.save.disabled = true;
    return elements.textArea.value = data || '';
  });
} else {
    elements.buttons.new.className = 'disable';
    elements.buttons.new.disabled = true;
    elements.buttons.edit.className = 'disable';
    elements.buttons.edit.disabled = true;
    elements.buttons.share.className = 'disable';
    elements.buttons.share.disabled = true;
    elements.buttons.raw.className = 'disable';
    elements.buttons.raw.disabled = true;
}

async function saveButton() {
  const code = document.getElementById('textarea').value;
  if (!code) return;
  const ID = await axios.post(`/documents`, { code });
  console.log(ID);
  window.location.href = `/${ID.data.key}`;
}

function newButton() {
  window.location.href = '/'
}

function editButton() {
  if (!elements.textArea.value && !elements.textArea.disabled) return;
  elements.buttons.edit.className = 'disable';
  elements.buttons.edit.disabled = true;
  elements.buttons.save.className = '';
  elements.buttons.save.disabled = false;
  elements.textArea.disabled = false;
}

function rawButton() {
  window.location.href = `/raw/${window.location.href.split('/').pop()}`;
}

function shareButton() {
  const element = document.createElement('input');

  document.body.appendChild(element);
  element.value = `${window.location.href}`;
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);
}

function homeButton(){
  window.location.href = '/<id do readme.md>';
}