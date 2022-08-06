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
    },
  },
  setup(props) {
    const { age, ...reset } = props;

    return () => (
      <div>
        <div>{props.age}</div>
        <Child {...props}></Child>
      </div>
    );
  },
});
