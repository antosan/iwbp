# JavaScript Exercises

## How to download the exercise files to your laptop

To get the exercise files on your laptop, open your terminal and navigate to the `repos` folder:

```
cd ~/repos
```

Once in the `repos` folder, create a new folder called `javascript-exercises` by running the following command:

```
mkdir javascript-exercises
```

While still in the `repos` folder, clone the instructions from the [`antosan/iwbp`](https://github.com/antosan/iwbp) repository on Github by running the following command:

```
git clone https://github.com/antosan/iwbp.git
```

Then navigate into the `iwbp` folder using the following command:

```
cd iwbp
```

NOTE: If you had already cloned the `antosan/iwbp` repo before, navigate into the `iwbp` folder using the following command:

```
cd iwbp
```

And update the folder by running the following command:

```
git pull
```

Next, while you are in the `iwbp` folder, you need to copy the exercise files for the assessment from the `iwbp` folder into your `javascript-exercises` folder by running the following command:

```
cp -r js-exercises/* ../javascript-exercises
```

Now navigate to the `javascript-exercises` folder using the following command:

```
cd ../javascript-exercises
```

Login into your Github account and create a new public repository called `javascript-exercises`. Copy the link to your repository to the clipboard. It should look like this: `https://github.com/YOUR_GITHUB_USERNAME/javascript-exercises.git`.

Back on the terminal, ensure you are in the `~/repos/javascript-exercises` folder and run the following commands to convert your folder into a Git repository, commit the initial starter files and push them to Github:

```
git init
```

Followed by:

```
git add .
```

Then:

```
git commit -m "Initial commit"
```

And then:

```
git remote add origin PASTE_HERE_THE_LINK_ON_YOUR_CLIPBOARD
```

Finally, run:

```
git push -u origin master
```

Confirm that the initial files are present on your Github repository.

Now you are ready to begin the assessment. Remember to commit and push your work after you finish working on each task.

## Instructions

Fix all the failing tests.