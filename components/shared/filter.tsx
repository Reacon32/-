import { Input } from "../ui/input";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
            <p className="font-bold mp-3">Цена от и до</p>
            <div className="flex gap-3 mb-5">
                <Input type="number" placeholder="0" min={0} max={5000} defaultValue={0}/>
                <Input type="number" min={100} max={5000} placeholder="5000"/>
            </div>
        </div>
    );
}