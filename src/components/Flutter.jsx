import { Button, makeStyles, Typography } from "@material-ui/core";
import { FlutterWaveButton, closePaymentModal, useFlutterwave } from 'flutterwave-react-v3';


const useStyles = makeStyles((theme)=>({
    pay: {
        
        display: "flex",
        fontWeight: 500,
        
      },
      text: {
        fontWeight: "500",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
      },
}));

const Flutter = () => {
    

        const config = {
         public_key: 'FLWPUBK_TEST-9853ba21361548c2de3eea8511b12c3c-X',
         tx_ref: Date.now(),
         amount: 200,
         currency: 'NGN',
         payment_options: 'card,mobilemoney,ussd',
         customer: {
           email: 'user@gmail.com',
           phonenumber: '07064586146',
           name: 'olaide ridwan',
         },
         customizations: {
           title: 'Join us',
           description: 'Payment for joining flutter',
           logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
         },
       };

       const handleFlutterPayment = useFlutterwave(config);
     
    //    const fwConfig = {
    //      ...config,
    //      text: 'Pay with Flutterwave!',
    //      callback: (response) => {
    //         console.log(response);
    //        closePaymentModal() // this will close the modal programmatically
    //      },
    //      onClose: () => {},
    //    };


    const  classes = useStyles();
  return (
    <div className={classes.pay}>
    
    <Button
        size="small" 
        color="primary"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        <Typography className={classes.text}>Join</Typography>
      </Button>
    {/* <FlutterWaveButton {...fwConfig} /> */}
    </div>
  )
}

export default Flutter
