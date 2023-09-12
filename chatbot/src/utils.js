import moment  from 'moment'
export const analyze = (text) => {
    if(text.includes('hi') || text.includes('hai') || text.includes('hello'))
         return 'Hi,How can i help you?'
     else  if(text.includes('date'))
           return moment().format('MMM Do YYY') 
     else  if(text.includes('time'))   
          return moment().format('h:mm:ss a')  
    else  if(text.includes('google link'))    
          return 'https://www.google.com'
    else  if (text.includes('intrest'))
          return 'Bank intrest rate is 8.7'
     else  if (text.includes('thank you'))
           return 'Thanks for Contacting me'
      else if (text.includes('movie name'))
            return 'Analyse the movie'         
    return "I can't get you.Can you rephrase the message"
}
      