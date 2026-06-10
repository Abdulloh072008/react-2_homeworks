import { Button } from "../../components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "../../components/ui/dialog"
import { Field, FieldGroup } from "../../components/ui/field"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { useFormik } from "formik"
import { useAppDispatch } from "../../store/store"
import { EditUsers } from "../../reducer/TodoSlice"
import { useState } from "react"

export function EditDialog({user}) {
    const dispatch = useAppDispatch()
    const [open,Setopen] = useState(false)
    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
            img: user.img,
            title: user.title,
            age: user.age,
        },
        onSubmit: (values) => {
            const Updatuser = {
                ...values,
                id: user.id,
                completed:user.completed
            }
            dispatch(EditUsers(Updatuser))
            formik.resetForm()
            Setopen(false)
        }
    })
    return (
        <Dialog open={open} onOpenChange={Setopen}>
            <DialogTrigger asChild>
                <Button variant="default">Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
                <form onSubmit={formik.handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="img">img</Label>
                            <Input id="img" name="img" placeholder="img" onChange={formik.handleChange}  value={formik.values.img} />
                        </Field>
                        <Field>
                            <Label htmlFor="title-1">Title</Label>
                            <Input id="title-1" name="title" placeholder="Title" onChange={formik.handleChange}  value={formik.values.title} />
                        </Field>
                        <Field>
                            <Label htmlFor="age-1">Age</Label>
                            <Input id="age-1" name="age" placeholder="Age" onChange={formik.handleChange}  value={formik.values.age} />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button  onClick={() => Setopen(false)} variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}
