import BurgerPost from './BurgerPost';

export default {
  title: 'Components/BurgerPost',
  component: BurgerPost,
};

export const Default = {
  args: {},
};

export const Favorited = {
  args: {
    isHighlighted: true,
  },
};
