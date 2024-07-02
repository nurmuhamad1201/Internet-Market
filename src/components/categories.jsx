 
const categories = [
  { id: 1, name: 'Phones' },
  { id: 2, name: 'Computers' },
  { id: 3, name: 'SmartWatch' },
  { id: 4, name: 'Camera', selected: true },
  { id: 5, name: 'HeadPhones' },
  { id: 6, name: 'Gaming' },
];

const Categories = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Browse By Category</h2>
      <div className="grid grid-cols-6 gap-4">
        {categories.map((category) => (
          <div key={category.id} className={`p-4 border rounded-lg text-center ${category.selected ? 'bg-red-500 text-white' : 'bg-white text-black'}`}>
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
