import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function Carrinho() {

    return (
        <Link href='/carrinho'>
            <div className="relative">
                <IconShoppingCart size={32} stroke={1} />
                <div className="absolute -top-1 -right-2 w-5 h-5 rounded-full bg-red-500 flex justify-center items-center text-xs text-white">10</div>
            </div>
        </Link>
    )
}