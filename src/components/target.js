export const targetComponent = {
    init() {
        const bumboldContainer = document.getElementById('bumboldContainer')
        this.el.addEventListener("targetFound", event => {
            console.log("target found");
            this.el.children[0].setAttribute('animation__scale', 'property: scale; to: 1 1 1;')
        });
    }
}