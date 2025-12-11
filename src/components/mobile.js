export const mobileComponent = {
    init() {
        const { isMobile } = this.el

        const mobilePromptContainer = document.getElementById('mobilePrompt__container')

        if (!isMobile) mobilePromptContainer.style.display = 'block'
    }
}