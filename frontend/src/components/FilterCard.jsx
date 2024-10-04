import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterdata = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["IT", "Automobile", "Banking", "Education"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40k-1lakh", "1-1.25lakh", "1-5lakh", "5-5lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md ">
      <h1 className="font-bold text-lg ">Filter Jobs</h1>
      <hr className="mt-3" />
      {filterdata.map((item, filterIndex) => (
        <div key={filterIndex}>
          <h2 className="font-bold text-lg">{item.filterType}</h2>
          <RadioGroup>
            {item.array.map((value, itemIndex) => (
              <div key={itemIndex} className="flex items-center mb-2 mt-1">
                <RadioGroupItem
                  value={value}
                  id={`radio-${item.filterType}-${itemIndex}`}
                  className="w-4 h-4 mr-2" // Styling for the radio button
                />
                <Label htmlFor={`radio-${item.filterType}-${itemIndex}`}>
                  {value}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
