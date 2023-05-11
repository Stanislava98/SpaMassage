import BrandRectangle from "./BrandRectangle";

const Brandes = () => {
  return (
    <div style={{marginTop: '30px'}}>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '34px'}}>
        <BrandRectangle image="brand1" variant="rightUp"/>
        <BrandRectangle image="brand2" variant="rightDown"/>
        <BrandRectangle image="brand3" variant="leftUp"/>
        <BrandRectangle image="brand4" variant="circle"/>
        <div style={{height: '238px', width: '238px'}}></div>
        <BrandRectangle image="brand5" variant="rightUp"/>
        <BrandRectangle image="brand6" variant="rightDown"/>
        <BrandRectangle image="brand7" variant="circle"/>
        <BrandRectangle image="brand8" variant="rightDown"/>
        <BrandRectangle image="brand9" variant="circle"/>
        <div style={{height: '238px', width: '238px'}}></div>
        <div style={{height: '238px', width: '238px'}}></div>
        <div style={{height: '238px', width: '238px'}}></div>
        <BrandRectangle image="brand10" variant="rightUp"/>
        <BrandRectangle image="brand11" variant="rightDown"/>
        <BrandRectangle image="brand12" variant="circle"/>
      </div>
    </div>
  )
}

export default Brandes;