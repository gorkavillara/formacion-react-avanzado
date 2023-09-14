import Card from './Card';

export default {
  title: 'Mis componentes/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    colorTexto: { control: 'color' },
  },
};

export const Light = {
  args: {
    textoPrimario: "Primera",
    textoSecundario: "Segunda",
    colorTexto: "#fff",
  },
};

export const Dark = {
  args: {
    textoPrimario: "Primera",
    textoSecundario: "Segunda",
    colorTexto: "#000",
  },
};
