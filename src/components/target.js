import { avatarInfo } from './avatarInfo'

export const targetComponent = {
    schema: {
        targetIndex: { type: 'number', default: 0 }
    },
    init() {
        const { targetIndex } = this.data
        const avatarObj = avatarInfo[targetIndex]
        const overlay = document.getElementById('overlay')
        const avatarTopContainer = document.getElementById('avatarTop__container')
        const avatarTopName = document.getElementById('avatarTop__name')
        const avatarInfoImg = document.getElementById('avatarInfo__img')
        const avatarInfoName = document.getElementById('avatarInfo__name')
        const avatarInfoClass = document.getElementById('avatarInfo__class')
        const avatarInfoDescription = document.getElementById('avatarInfo__description')
        const avatarInfoClose = document.getElementById('avatarInfoClose__container')

        const avatarContainer = document.getElementById(`avatarContainer-${targetIndex}`)

        this.el.addEventListener("targetFound", event => {
            avatarContainer.setAttribute('animation', 'property: scale; from: 0 0 0; to: 1 1 1;')
            avatarTopName.innerHTML = avatarObj.name
            avatarInfoName.innerHTML = avatarObj.name
            avatarInfoClass.innerHTML = `Class: ${avatarObj.class}`
            avatarInfoDescription.innerHTML = avatarObj.description
            avatarInfoImg.setAttribute('src', avatarObj.image)

            overlay.style.display = 'block'
            setTimeout(() => {
                avatarTopContainer.style.opacity = 1
            })
        });

        this.el.addEventListener("targetLost", event => {
            avatarTopContainer.style.opacity = 0
            avatarInfoClose.click()
        });
    }
}