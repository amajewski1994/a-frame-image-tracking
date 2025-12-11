export const uiComponent = {
    init() {
        const avatarButton = document.getElementById('avatarButton')
        const avatarInfoClose = document.getElementById('avatarInfoClose__container')
        const avatarInfo = document.getElementById('avatarInfo__container')

        let isInfoOpen = false

        const avatarInfoVisibilityHandler = (show) => {
            const translateY = show ? '-100%' : '10%'

            avatarInfo.style.transform = `translate(-50%, ${translateY})`
        }

        avatarButton.addEventListener('click', () => {
            if (isInfoOpen) return
            isInfoOpen = true
            avatarInfoVisibilityHandler(isInfoOpen)
        })

        avatarInfoClose.addEventListener('click', () => {
            if (!isInfoOpen) return
            isInfoOpen = false
            avatarInfoVisibilityHandler(isInfoOpen)
        })
    }
}
