import { Container } from './container';
import { cn } from '@/lib/utils';
import  Image from 'next/image';
import * as React from 'react';
import { Button } from '../ui/button';
import { User } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
interface Props {
className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
return (
<header className={cn('border border-b', className)}>
<Container className='flex items-center justify-between py-8'>
<div className='flex'>
    <div className='left flex items-center gap-4 '> 

        {/*Левая часть*/}    
        <Image src='./pizza.svg' alt='logo' width={35} height={35} /> 
    </div> 
    <div> 
        <h1 className='text-2x1 uppercase font-black'> NEXT PIZZA</h1> 
        <p>Вкусней уже некуда</p> 
    </div>
</div>

    {/*Правая часть*/}
    <div className = 'flex items-center gap-4'>
    <Button variant={"outline"} className = "gap-2">
        <User size={16}/> Войти
        </Button>

       <Button variant={"outline"}>
        <ShoppingCart size={16}/>
     </Button> 
    </div>


</Container>
</header>
);
}