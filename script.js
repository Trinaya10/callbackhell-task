var callbackhell= (num = 0, action = () => {})=> {
    console.log(num)
    if(action) {
            action()
    }
 }
 
 
 callbackhell(10, 
     () => callbackhell(9, 
       () => callbackhell(8,
       () => callbackhell(7,
           () => callbackhell(6, 
             () => callbackhell(5,
             () => callbackhell(4,
               () =>callbackhell(3, () => callbackhell(2,
               ()=> callbackhell(1, ()=> {console.log("Happy Independence Day")
               }
                     )
                   )
                 )
               )
             )
           )
         )
       )
     )
   );