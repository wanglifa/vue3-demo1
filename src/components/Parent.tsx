import { defineComponent, toRefs } from "vue";
import { Child } from "./Child";

export const Parent = defineComponent({
  props: {
    age: {
      type: Number,
    },
    name: {
      type: String,
    },
    height: {
      type: Number,
    }
  },
  setup(props) {
    const { age, ...reset} = toRefs(props)

    return () => (
      <Child {...reset}>
        <div>{age.value}</div>
      </Child>
    )
  }
})