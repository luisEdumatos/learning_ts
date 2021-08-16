namespace Greetings {
    export function returnGreeting(greeting: string) {
        console.log('Teste'); 
    }
}

namespace GreetingsWithLength { 
    export function returnGreeting(greeting: string) { 
        let greetingLength = getLength(greeting); 
        console.log(`${greeting} ${greetingLength}`); 
    }

    function getLength(message: string): number {
        return message.length; 
    } 
}

//returnGreeting('Hello'); Returns Error
Greetings.returnGreeting('Hello'); 
GreetingsWithLength.returnGreeting('Bonjour');