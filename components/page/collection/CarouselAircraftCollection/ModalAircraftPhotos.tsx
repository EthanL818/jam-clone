import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { CarouselPhotos } from './CarouselPhotos'



interface ModalAircraftPhotosProps {
  urls: string[],
  onOpen: () => void,
}
export function ModalAircraftPhotos({ urls, onOpen }: ModalAircraftPhotosProps) {
  const { isOpen, onClose } = useDisclosure()

  return (
    <>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CarouselPhotos photosURL={urls} />
          </ModalBody>
          {/* <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  )
}