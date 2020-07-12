import { FunctionalComponent, h } from "vue";

const FunctionComp: FunctionalComponent = (
  props: { active: boolean } /* Doesn't work */,
  { slots }
) => {
  const { active } = props;
  return h("div", {
    class: ["func-comp", { active }],
  });
};

FunctionComp.props = {
  active: {
    type: Boolean,
    required: false,
    default: false,
  },
};

FunctionComp.displayName = "FunctionComp";

export default FunctionComp;
