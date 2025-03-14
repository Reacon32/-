import { Container, Filters, Title } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductGroupList } from "@/components/shared/products-group-list";
import { TopBar } from "@/components/shared/top-bar";




export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      </Container>
      <TopBar/>
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/*Фильтрация*/}
          <div className="w-[250px]">
            <Filters/>
          </div>

          {/*Список товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList title="Пиццы" items={[{
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjG6MRh7TqnHmOrttyW0sZ_mG_LL8-7pAyA&s',
                price: 550,
                items: [{price: 500}]
              },{
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjG6MRh7TqnHmOrttyW0sZ_mG_LL8-7pAyA&s',
                price: 550,
                items: [{price: 500}]
              },{
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjG6MRh7TqnHmOrttyW0sZ_mG_LL8-7pAyA&s',
                price: 550,
                items: [{price: 500}]
              },{
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjG6MRh7TqnHmOrttyW0sZ_mG_LL8-7pAyA&s',
                price: 550,
                items: [{price: 500}]
              },{
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjG6MRh7TqnHmOrttyW0sZ_mG_LL8-7pAyA&s',
                price: 550,
                items: [{price: 500}]
              },{
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjG6MRh7TqnHmOrttyW0sZ_mG_LL8-7pAyA&s',
                price: 550,
                items: [{price: 500}]
              },
              ]} categoryId={1}/>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}