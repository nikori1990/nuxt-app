export default defineComponent({
  props: {
    message: String,
  },
  render: (props: any) => {
    return (
    <div>
      { props.message }
    </div>
    )
  },
})
