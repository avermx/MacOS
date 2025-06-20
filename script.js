const notepadicon = document.querySelector('.notepad-icon')
const maincontainer = document.querySelector('.main-content')
notepadicon.addEventListener('dblclick',()=>{
    const createnotepad = document.createElement('div')
    createnotepad.classList.add('outer-notepad-textarea')
    createnotepad.innerHTML = `<div class="notepad-text">
                    <div class="note-left">
                        <h3>Note</h3>
                    </div>
                    <div class="note-right " >
                        <button >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-x ">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>

                    </div>

                </div>
                <div class="inner-notepad-textarea">
                    <textarea  id=""></textarea>
                </div>`
            maincontainer.appendChild(createnotepad)
            notepadicon.disabled  = true
})
