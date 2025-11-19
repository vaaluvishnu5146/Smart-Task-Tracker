"use client";
import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  TextInput,
} from "flowbite-react";
import ColorPicker from "../ColorPicker/ColorPicker";
import Badge from "../../Elements/Badge/Badge";

export function EditModal({
  task = "",
  color = "",
  openModal = false,
  tagSelected = "",
  handleTagCheck = () => {},
  setOpenModal = () => {},
  handleColorPicker = () => {},
  handleUpdate = () => {},
}) {
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Edit Task</ModalHeader>
        <ModalBody>
          <div className="mb-5">
            <div className="mb-2 block">
              <Label htmlFor="email1">Enter Task Title</Label>
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
              value={task}
            />
          </div>
          <div className="mb-5">
            <div className="mb-2 block">
              <Label htmlFor="email1">Pick Color</Label>
            </div>
            <ColorPicker color={color} handleColorPicker={handleColorPicker} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Pick Tag</Label>
            </div>
            <div className="flex h-full items-center gap-x-3">
              <span>
                <Badge
                  id="personal"
                  label="Personal"
                  tagSelected={tagSelected}
                  handleTagCheck={handleTagCheck}
                />
              </span>
              <span>
                <Badge
                  id="official"
                  label="Official"
                  tagSelected={tagSelected}
                  handleTagCheck={handleTagCheck}
                />
              </span>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="alternative" onClick={handleUpdate}>
            Save
          </Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
