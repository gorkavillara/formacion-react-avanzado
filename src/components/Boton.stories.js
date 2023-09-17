import Boton from "./Boton";

export default {
    title: "Mis Componentes/Boton",
    component: Boton,
    tags: ['autodocs'],
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
}

export const Oscuro = {
    args: {
        label: "Oscuro"
    }
}

export const Claro = {
    args: {
        label: "Claro",
        backgroundColor: "#cecece"
    }
}