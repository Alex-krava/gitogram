import FollowingItem from './following-item.vue';

export default {
    title: 'FollowingItem',
    component: FollowingItem,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { FollowingItem },
    template: `<following-item v-bind="$props" />`,
});
