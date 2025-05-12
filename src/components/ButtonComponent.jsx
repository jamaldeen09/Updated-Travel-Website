const ButtonComponent = (props) => {

    const { buttonTxt,bg,hoverEffect,customPadding,font,absPosition } = props
  return (
    <button className={`${bg} ${font} ${absPosition} rounded-lg text-black ${customPadding || "px-4 py-3"}
    flex space-x-3 ${hoverEffect}`}>
       <p>{buttonTxt}</p>
    </button>
  )
}

export default ButtonComponent