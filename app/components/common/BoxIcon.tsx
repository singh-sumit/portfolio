import 'boxicons';

export const BoxIcon = ({type, name})=>{
  return (
    // @ts-ignore
    <box-icon
      size="lg"
      border="circle"
      type={type} name={name}
      // className="relative"
      style={{position: 'relative', left: '10%', top: '10%'}}
    ></box-icon>
  )
}