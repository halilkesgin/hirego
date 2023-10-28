import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { useProfileImageModal } from "@/hooks/use-profile-image-modal"
import { toast } from "@/hooks/use-toast"
import { Candidate } from "@prisma/client"
import axios from "axios"
import { ImageIcon, Pencil, PlusCircle } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import * as z from "zod"
import { FileUpload } from "../file-upload"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

const formSchema = z.object({
    image: z.string().min(1)
})

interface Props {
    candidate?: Candidate
}

const ProfileImageModal = ({
    candidate
}: Props) => {

    const [isEditing, setIsEditing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const toggleEdit = () => setIsEditing((current) => !current)
    const router = useRouter()
    const profileImageModal = useProfileImageModal()

    const {
      register,
      handleSubmit,
      setValue,
      watch,
      formState: {
        errors
      }
    } = useForm<FieldValues>({
      defaultValues: {
        image: candidate?.image
      }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/candidate/profile', data)
        .then(() => {
            toggleEdit()
            router.refresh();
            window.location.assign("/candidate/profile");
        })
        .catch(() => toast({
            title: "Error",
            variant: "destructive",
            description: "Error sir"
        }))
        .finally(() => setIsLoading(false));
    }

    return (
        <Modal
            title="Profile"
            description="Edit your profile image"
            isOpen={profileImageModal.isOpen}
            onClose={profileImageModal.onClose}
        >
            <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course image
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && (
            <>Cancel</>
          )}
          {!isEditing && !candidate?.image && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add an image
            </>
          )}
          {!isEditing && candidate?.image && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit image
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        !candidate?.image ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
            <ImageIcon className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <Image
              alt="Upload"
              fill
              className="object-cover rounded-md"
              src={candidate?.image}
            />
          </div>
        )
      )}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="imageUploader"
            onChange={(url) => {
              if (url) {
                onSubmit({ image: url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            16:9 aspect ratio recommended
          </div>
        </div>
      )}
    </div>
        </Modal>
    )
}

export default ProfileImageModal