#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { homedir } = require("os");

const cargoDir = path.join(homedir(), ".cargo");

// check if directory exists
if (fs.existsSync(cargoDir)) {
  //   console.log("Cargo found.");
} else {
  const setCargo = 'PATH="/$HOME/.cargo/bin:${PATH}"';
  console.log("Installing deps [cargo].");

  exec(
    `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y && ${setCargo}`,
    (error) => {
      if (error) {
        console.log(
          "curl failed! Curl may not be installed on the OS. View https://curl.se/download.html to install."
        );
        console.log(error);
      }
    }
  );
}
    
const binp = path.join(cargoDir, "bin", "jims-new-rust-cli-test");

if (fs.existsSync(binp)) {
  console.log("Uninstalling jims-new-rust-cli-test...");
  exec(`cargo uninstall jims-new-rust-cli-test`, (error, stdout, stderr) => {
    console.log(stdout);
    if (error || stderr) {
      console.log(error || stderr);
    }
  });
} else {
  console.log("jims-new-rust-cli-test not found skipping!");
}
    
    