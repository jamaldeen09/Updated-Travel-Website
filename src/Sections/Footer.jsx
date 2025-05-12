import FooterEnd from "../components/FooterEnd";
import { productFooter,resourcesFooter,companyFooter,legalFooter,footerHeaders } from "../content";


const Footer = () => {
  return (
    <>
    
    <footer className="min-h-64 flex justify-between p-10 max-sm: flex-col gap-10 sm:flex-col gap-10 annoying:flex-col gap-10 lg:flex-row">
      <div className="max-w-sm flex flex-col gap-20 w-1/2">
        <div className="text-white flex items-center space-x-2">
          <img src="/src/assets/images/notes.png" alt="Logo" />
          <h1 className="max-sm:text-2xl sm:text-3xl font-bold poppins ">
            SmartNotes
          </h1>
        </div>

        <input
            type="email"
            className="relative h-[7.5vh] rounded-lg w-full px-4"
            placeholder="Enter your email"
          />
      </div>

      <div className="text-white poppins grid max-sm: grid-cols-2 sm:grid-cols-4 gap-3 min-w-[90vw] annoying:grid-cols-4 lg:grid-cols-4 min-w-[60vw] items-center">
         <div className="flex flex-col gap-2 ">
            <h1 className="font-bold text-xl">{footerHeaders[0]}</h1>
            <ul style={{listStyleType: "none"}} className="">
                {productFooter.map((product) => {
                    return <li>
                        {product}
                    </li>
                })}
            </ul>
         </div>

         <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">{footerHeaders[1]}</h1>
            <ul style={{listStyleType: "none"}} className="">
                {companyFooter.map((product) => {
                    return <li>
                        {product}
                    </li>
                })}
            </ul>
         </div>

         <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">{footerHeaders[2]}</h1>
            <ul style={{listStyleType: "none"}} className="">
                {resourcesFooter.map((product) => {
                    return <li>
                        {product}
                    </li>
                })}
            </ul>
         </div>

         <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">{footerHeaders[3]}</h1>
            <ul style={{listStyleType: "none"}} className="">
                {legalFooter.map((product) => {
                    return <li>
                        {product}
                    </li>
                })}
            </ul>
         </div>
      </div>
    
    </footer>
    <FooterEnd />
    </>
  );
};

export default Footer;
