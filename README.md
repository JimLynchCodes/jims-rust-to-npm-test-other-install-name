Recreate this project with these steps:

## Step 1) Create a new repo
Create a new repo and clone it

## Step 2) Create a new rust binary project
This can easily be done with cargo:
```bash
cargo new jims-rust-cli-test
```

## Step 3) Change the hello message
Open the `main.rs` file and change the string returned to whatever you like...

## Step 4) Adjust Cargo.toml
Add these keys to Cargo.toml (with your desired values):
```
description = "A cool cli tool test by Jim!"
repository = "https://github.com/JimLynchCodes/jims-rust-to-npm-test"
readme = "README-for-registry.md"
keywords = ["rust-to-npm-cli", "deploy-rust", "npm", "rust", "cli-tool"]
categories = ["command-line-utilities"]
license = "MIT"
homepage = "https://github.com/JimLynchCodes/jims-rust-to-npm-test"
authors = ["Jim Lynch - jim.lynch@evaluates2.com"]
```

# Step 5) Account Logins

Login to your crates.io account in your terminal:
```sh
cargo login
```

Login to your npmjs.com account in your terminal:
```sh
npm adduser
```

## Step 6) Install rust-to-npm
```sh
cargo install rust-to-npm-cli
```

OR via npm (but not both)

```sh
npm i -g rust-to-npm-cli
```

## Step 7) Deploy With Other Name
```sh
rust-to-npm-cli deploy -b -n other-name-jims-rust-to-npm-cli-test
```

## Step 8) Re-Deploy
Change the version in Caargo.toml (according to semver) and then repeat step 6.

## Step 9) Install Your Package

```sh
npm i -g other-name-jims-rust-to-npm-cli-test
```

_or_

```sh
cargo install other-name-jims-rust-to-npm-cli-test
```

## Step 10) User Your Package

```sh
jims-new-rust-cli-test
```