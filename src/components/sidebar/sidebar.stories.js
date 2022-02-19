import Sidebar from './sidebar.vue';

export default {
    title: 'Sidebar',
    component: Sidebar,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Sidebar },
    template: `<sidebar v-bind="$props" />`,
});
