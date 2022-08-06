import { defineComponent, ref } from "vue";
import { Parent } from "./components/Parent";

export const App = defineComponent({
  setup() {
    const name = ref('lifa')
    const height = ref(178)
    const age = ref(18)
    return () => (
    <Parent 
      name={name.value}
      height={height.value}
      age={age.value}
    
    />
    )
  }
})