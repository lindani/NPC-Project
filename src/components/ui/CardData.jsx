import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
	Button,
} from "@material-tailwind/react";

export const CardData = ({ title, content, image, icon }) =>{
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader floated={false} className="h-48">
      <img className="w-full h-48 object-cover rounded-lg" src={image} alt={title} />

      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {content}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          color="orange"
          fullWidth
          className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-md"
        >
          Learn More
        </Button>
      </CardFooter>
      {/* <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          <Tooltip content="Natali Craig">
            <Avatar
              size="sm"
              variant="circular"
              alt="natali craig"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
          <Tooltip content="Tania Andrew">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
        </div>
        <Typography className="font-normal">January 10</Typography>
      </CardFooter> */}
    </Card>
  );
}