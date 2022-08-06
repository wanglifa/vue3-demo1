import { defineComponent } from "vue";

export const Child = defineComponent({
  props: {
    height: {
      type: Number
    },
    name: {
      type: String
    }
  },
  setup(props) {
    return () => (
      <>
      <div>{props.name}</div>
      <div>{props.height}</div>
      </>
    )
  }
})
