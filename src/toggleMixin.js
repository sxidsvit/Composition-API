export default {
  // data: () => ({
  //   visible: false
  // }),
  data() {
    return {
      visible: false
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    }
  }
}