


const Pagamento = () =>{




    
const [paid, setPaid] = useState(false);
const [loaded, setLoaded] = useState(false);


let paypalRef = useRef();


const product = {
price: 15.70,
description: "fone de ouvidos",

}  


useEffect(( ) => {
    const script = document.createElement("script");
    const id = 'ATEMFzukALgvmGlGPWZ7oelrl_JQaC2rWLkQan4d0Yi1AxMd-ZO6ve9-PfzL7mWy13w7v72do8nJro1T'
    script.src = 'https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}'
    script.addEventListener("load", () => setLoaded(true));
    document.body.appendChlid(script);

    if(loaded) {
        function loadBurronsAndLogicAboutPaument(){
            setTimeout(() => {
                window.paypal

                .Buttons({
                        createOrder: (data, actions) => {
                            return actions.order.create({

                                    purchase_units:[
                                        {
                                            description: product.description,
                                            amount:{

                                                currency_code: "BRL",
                                                value: product.price
                                            }
                                        }
                                    ]
                                 
                            });
                        },
                        onApprove: async (_,actions) => {
                        const order = await actions.order.capture();

                        setPaid(true);

                        console.log(order);

                    }
                })
                .render(paypalRef);
            })
        }
        loadBurronsAndLogicAboutPaument();
    }
  })



};
  export default Pagamento;