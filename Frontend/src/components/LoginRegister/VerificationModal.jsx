import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalDialog,
  DialogTitle,
  DialogContent,
  Button,
  Input,
  FormLabel,
  Textarea,
} from "@mui/joy";

function VerificationModal({ isOpen, onClose }) {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <ModalDialog>
          <DialogTitle>Verify your email</DialogTitle>
          <DialogContent>
            <div>
              <p>We have sent the code to your email</p>
              <p>username@gmail.com</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: 300,
              }}
            >
              <Input />
              <Input />
              <Input />
              <Input />
            </div>
            <Button type="button">Verify</Button>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </>
  );
}

export default VerificationModal;
