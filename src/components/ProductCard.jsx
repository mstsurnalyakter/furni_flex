import PropTypes from "prop-types";
import { SlHandbag } from "react-icons/sl";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { saveProductIdToLS } from "../utils/localStore";




const ProductCard = ({ item }) => {
   const id = parseInt(item.id);

  const handleProduct = () =>{
    saveProductIdToLS(id);
  }


  return (
    <div>
      <Card className="mx-auto relative overflow-hidden min-h-[400px] flex flex-col">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none object-cover h-52"
        >
          <figure className="object-cover w-full  rounded h-64">
            <img
              className="w-full h-full"
              src={item?.image}
              alt={`${item?.name} image`}
            />
          </figure>
        </CardHeader>
        <CardBody className="flex-grow space-y-3">
          <Typography variant="h6" color="blue-gray">
            {item?.name}
          </Typography>

          <div className="flex items-center gap-5">
            <Typography variant="h6" className="text-[#343434] font-bold">
              ${item?.discount_price}
            </Typography>
            <Typography
              variant="h6"
              className="text-[#ABABAB] font-semibold line-through"
            >
              ${item?.price}
            </Typography>
            <Typography variant="h6" className="text-[#B92E2E] font-semibold">
              {item?.discount} % OFF
            </Typography>
          </div>
          <Typography variant="small" color="gray" className="mt-3 font-normal">
            {item?.description}
          </Typography>
          <Button onClick={handleProduct} className="bg-[#202020] capitalize w-full rounded-md flex gap-2 items-center justify-center">
            <SlHandbag />
            <span>Add to cart</span>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductCard;
