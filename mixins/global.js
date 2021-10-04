export default {
  methods: {
    search(value, old, key) {
      const search = value.toLowerCase().trim();
      if (!search) return old;
      return old.filter(c => c[key].toLowerCase().indexOf(search) > -1);
    }
  },
  computed: {

  }
}
