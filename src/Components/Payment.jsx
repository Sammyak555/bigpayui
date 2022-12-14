import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import "../Styles/payment.css"

const Payment = () => {
  const [detail, setDetail] = useState(true)
  const [active, setActive] = useState(true)
  const [divchange,setDivchange]= useState("credit")
  // const[active1,setActive2] = useState(false)

  console.log(divchange)

  return (
    <div className='payment'>
      <div className='options'>
        <div onClick={() => { setActive(false); setDetail(false) }} style={{ backgroundColor: active ? "rgb(253, 247, 238)" : "white" }} className='offer'>
          <br />
          <h1>Payment options with offer</h1>
          <h3>Apply voucher code, if applicable, to avail the offer</h3>

        </div>
        <div onClick={() => { setActive(true); setDetail(true) }} style={{ backgroundColor: active ? "white" : "rgb(253, 247, 238)" }} className='other'></div>
      </div>
      {
        detail &&
        <div className='detailsother'>
          <div className='detailsotherbox'>
            <div className='leftother'>
              <div className='leftothercomp' onClick={()=>setDivchange("credit")}><h1>Credit Card/Debit Card</h1></div>
              <div className='leftothercomp' onClick={()=>setDivchange("Nbank")}><h1>Net Banking</h1></div>
              <div className='leftothercomp' onClick={()=>setDivchange("upi")}><h1>UPI</h1></div>
              <div className='leftothercomp' onClick={()=>setDivchange("wallet")}><h1>Wallet</h1></div>
              <div className='leftothercomp' onClick={()=>setDivchange("otp")}><h1>Cash On Delivery</h1></div>
            </div>
            <div className='rightother'>
              {
                divchange==="credit"&&
                <div>credit
                  
                </div>
              }
              {
                divchange==="Nbank"&&
                <div>nbank</div>
              }
              {
                divchange==="upi"&&
                <div>upi</div>
              }
              {
                divchange==="wallet"&&
                <div>wallet</div>
              }
              {
                divchange==="otp"&&
                <div>otp</div>
              }
            </div>
          </div>
        </div>
      }
      {!detail &&
        <div className='detailsoffer'>
          <div className='payoffer'>
            <Accordion allowToggle>
              <AccordionItem>
                <h2 >
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <Flex >
                        <img style={{ height: "40px" }} src="https://play-lh.googleusercontent.com/__dcaC1aUkZqsP7UW6vwZpQiayorQhdBzhXAatmzSVp7wtwfpdyswVHt2FpVsx51V1g=w240-h480-rw" alt="" />
                        <Box marginLeft={'10px'}>
                          <h1 style={{ color: "rgb(72, 72, 72)", fontFamily: "sans-serif" }}>Tata Pay</h1>
                          <h2 style={{ color: "green", fontFamily: "sans-serif" }}>The smart & secure way to pay using NeuCoins, saved cards & more</h2>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <input type="text" style={{ backgroundColor: "rgb(253, 247, 238)", marginLeft: "-370px" }} />
                  <br />
                  <h3 style={{ color: "rgb(75, 75, 75)", marginLeft: "-270px", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                  <Button variant='solid' width='25%' marginLeft={'-370px'} marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                    SEND OTP</Button>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className='payoffer'>
            <Accordion allowToggle>
              <AccordionItem>
                <h2 >
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <Flex >
                        <img style={{ height: "40px" }} src="https://assets.juspay.in/juspay/payments/in.hyper.pay.bb_staging/beta/WEB/1.0rc1/assets/ic_paytm.png" alt="paytm" />
                        <Box marginLeft={'10px'}>
                          <h1 style={{ color: "rgb(72, 72, 72)", fontFamily: "sans-serif" }}>Paytm</h1>
                          <h2 style={{ color: "green", fontFamily: "sans-serif" }}>Get Rs.25 - 500 Cashback, minimum order Rs.1000 valid TWICE. Avail cashback through scratch card on Paytm App.  (1-31 DEC)</h2>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <input type="text" style={{ backgroundColor: "rgb(253, 247, 238)", marginLeft: "-370px" }} />
                  <br />
                  <h3 style={{ color: "rgb(75, 75, 75)", marginLeft: "-270px", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                  <Button variant='solid' width='25%' marginLeft={'-370px'} marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                    SEND OTP</Button>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className='payoffer'>
            <Accordion allowToggle>
              <AccordionItem>
                <h2 >
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <Flex >
                        <img style={{ height: "40px" }} src="https://payments.juspay.in/web/images/theme_light/freecharge.png" alt="freecharge" />
                        <Box marginLeft={'10px'}>
                          <h1 style={{ color: "rgb(72, 72, 72)", fontFamily: "sans-serif" }}>Freecharge</h1>
                          <h2 style={{ color: "green", fontFamily: "sans-serif" }}>Flat Rs.50 cashback on minimum order value of Rs.1500; Once per user. (1-31 DEC)</h2>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <input type="text" style={{ backgroundColor: "rgb(253, 247, 238)", marginLeft: "-370px" }} />
                  <br />
                  <h3 style={{ color: "rgb(75, 75, 75)", marginLeft: "-270px", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                  <Button variant='solid' width='25%' marginLeft={'-370px'} marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                    SEND OTP</Button>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className='payoffer'>
            <Accordion allowToggle>
              <AccordionItem>
                <h2 >
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <Flex >
                        <img style={{ height: "40px" }} src="https://payments.juspay.in/web/images/theme_light/payzapp.png" alt="payzapp" />
                        <Box marginLeft={'10px'}>
                          <h1 style={{ color: "rgb(72, 72, 72)", fontFamily: "sans-serif" }}>PayzApp</h1>
                          <h2 style={{ color: "green", fontFamily: "sans-serif" }}>Get Flat 30 Rs Cashback, minimum order Rs.1000. Use code GROCERY on Payzapp page (Save up to Rs.30) (1-31 DEC)</h2>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <input type="text" style={{ backgroundColor: "rgb(253, 247, 238)", marginLeft: "-370px" }} />
                  <br />
                  <h3 style={{ color: "rgb(75, 75, 75)", marginLeft: "-270px", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                  <Button variant='solid' width='25%' marginLeft={'-370px'} marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                    SEND OTP</Button>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className='payoffer'>
            <Accordion allowToggle>
              <AccordionItem>
                <h2 >
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <Flex >
                        <img style={{ height: "40px" }} src="https://payments.juspay.in/web/images/theme_light/mobikwik.png" alt="mobikwik" />
                        <Box marginLeft={'10px'}>
                          <h1 style={{ color: "rgb(72, 72, 72)", fontFamily: "sans-serif" }}>MobiKwik</h1>
                          <h2 style={{ color: "green", fontFamily: "sans-serif" }}>Get Up to 100 Rs cashback. Minimum order Rs.299. Valid Once per user. Assured Cashback Rs.10 (1-31 DEC)</h2>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <input type="text" style={{ backgroundColor: "rgb(253, 247, 238)", marginLeft: "-370px" }} />
                  <br />
                  <h3 style={{ color: "rgb(75, 75, 75)", marginLeft: "-270px", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                  <Button variant='solid' width='25%' marginLeft={'-370px'} marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                    SEND OTP</Button>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className='payoffer'>
            <Accordion allowToggle>
              <AccordionItem>
                <h2 >
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <Flex >
                        <img style={{ height: "40px" }} src="https://payments.juspay.in/web/images/theme_light/mobikwik.png" alt="mobikwik" />
                        <Box marginLeft={'10px'}>
                          <h1 style={{ color: "rgb(72, 72, 72)", fontFamily: "sans-serif" }}>MobiKwik</h1>
                          <h2 style={{ color: "green", fontFamily: "sans-serif" }}>Get Rs.25 - 500 Cashback, minimum Recharge Rs.1500 valid TWICE. Avail cashback through scratch card on Paytm App.  (1-31 DEC)</h2>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <input type="text" style={{ backgroundColor: "rgb(253, 247, 238)", marginLeft: "-370px" }} />
                  <br />
                  <h3 style={{ color: "rgb(75, 75, 75)", marginLeft: "-270px", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                  <Button variant='solid' width='25%' marginLeft={'-370px'} marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                    SEND OTP</Button>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      }

    </div>
  )
}

export default Payment