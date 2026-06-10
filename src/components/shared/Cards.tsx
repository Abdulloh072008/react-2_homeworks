import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Deleteuser } from "../../reducer/TodoSlice"
import { useAppDispatch } from "../../store/store"
import { EditDialog } from "./EditDialog"

export function Cards({user}) {
  const dispatch = useAppDispatch()
  return (
    <Card className="w-80 relative pt-0">
      <div className="absolute " />
      <img
        src={user.img}
        alt="Event cover"
        className="  object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge className={user.completed ? "bg-green-500" : "bg-red-500"} variant="secondary">{user.completed ? <span className="text-white">Actuve</span> : <span className="text-white">Not Active</span>}</Badge>
        </CardAction>
        <CardTitle>Title: {user.title}</CardTitle>
        <CardDescription>
          Age: {user.age}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button onClick={() => dispatch(Deleteuser(user.id))} variant="destructive">Delete</Button>
        <EditDialog user={user}/>
      </CardFooter>
    </Card>
  )
}
