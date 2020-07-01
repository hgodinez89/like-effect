const thumbsUp = `
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="reaction-up like">
        <path
            d="M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z" />
   </svg>
   `;

const love = `
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="reaction-up love">
        <path
            d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
   </svg>
   `;

const unlike = `
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="reaction-up unlike">
        <path
            d="M5 14h-5v-12h5v12zm18.875-4.809c0-.646-.555-1.32-1.688-1.41-.695-.055-.868-.623-.031-.812.701-.159 1.098-.652 1.098-1.181 0-.629-.559-1.309-1.826-1.543-.766-.141-.842-.891-.031-.953.688-.053.96-.291.96-.626-.001-.931-1.654-2.666-4.852-2.666-4.16 0-6.123 2.067-10.505 2.768v10.878c2.375.869 4.466 2.644 5.688 6.886.478 1.661.781 3.468 2.374 3.468 2.375 0 2.594-5.125 1.688-8.781 1.312-.688 3.751-.936 4.979-.885 1.771.072 2.271-.818 2.271-1.49 0-1.011-.833-1.35-1.354-1.51-.609-.188-.889-.807-.031-.922.836-.112 1.26-.656 1.26-1.221z" />
   </svg>
   `;

const thinking = `
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="reaction-up thinking">
        <path
            d="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-5.572c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm5.521 1.544l1.57-1.743 1.019.918-1.603 1.777c-.25-.297-.593-.672-.986-.952zm-10.738.952l-1.603-1.777 1.019-.918 1.57 1.743c-.392.28-.736.655-.986.952zm-1.597 5.429h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z" />
   </svg>
   `;   

class Like {
  constructor () {
    this.bindEvents()
  }

  bindEvents () {
    document.querySelector('.reaction-btn').addEventListener('click', (ev) => {
      ev.preventDefault()
      ev.stopPropagation()
      document.querySelector('.reactions').style.visibility = 'visible'
    })

    document.addEventListener('click', function (ev) {
      let reactions = document.querySelector('.reactions')

      if (reactions.style.visibility == 'visible' && reactions != ev.target) {
        reactions.style.visibility = 'hidden'
      }
    }, false)

    document.querySelectorAll('.reactions-container .reactions').forEach(element => {
        let card = document.querySelector('.card');
      element.addEventListener('click', (ev) => {
        this.buildThumbsUp(ev);
        card.appendChild(this.reaction_animation);
        
        
      })
    })
  }

  buildThumbsUp (ev) {
    this.reaction_animation = document.createElement('div')
    this.reaction_animation.style.position = 'absolute';
    this.reaction_animation.style.top = '40%';
    this.reaction_animation.style.left = '40%';

    console.log(ev.target.classList);
    
    if (ev.target.classList == "like") {
        this.reaction_animation.innerHTML = thumbsUp;
    } else if (ev.target.classList == "love") {
        this.reaction_animation.innerHTML = love;
    } else if (ev.target.classList == "unlike") {
        this.reaction_animation.innerHTML = unlike;
    } else if (ev.target.classList == "thinking") {
        this.reaction_animation.innerHTML = thinking;
    }
  }
}

(function () {
  new Like()
})()
