# Fundamental layout comprehension

This task will test some of your knowledge in laying out the design of a website by way of developing a simple webpage layout using a variety of techniques.

## How to download the starter files to your laptop

To get the starter files on your laptop, open your terminal and navigate to the `repos` folder:

```
cd ~/repos
```

Once in the `repos` folder, create a new folder called `css-layout-assessment` by running the following command:

```
mkdir css-layout-assessment
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

Next, while you are in the `iwbp` folder, you need to copy the starter files for the assessment from the `iwbp` folder into your `css-layout-assessment` folder by running the following command:

```
cp -r css-layout/* ../css-layout-assessment
```

Now navigate to the `css-layout-assessment` folder using the following command:

```
cd ../css-layout-assessment
```

Login into your Github account and create a new public repository called `css-layout-assessment`. Copy the link to your repository to the clipboard. It should look like this: `https://github.com/YOUR_GITHUB_USERNAME/css-layout-assessment.git`.

Back on the terminal, ensure you are in the `~/repos/css-layout-assessment` folder and run the following commands to convert your folder into a Git repository, commit the initial starter files and push them to Github:

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

## Starting point

You have been provided with some raw HTML, basic CSS, and images — now you need to create a layout for the design, which should look just like the image below.

![Layout Complete](layout-task-complete.png)

Opening the `index.html` file in a browser should give you a page with basic styling but no layout, which should look something like the image seen below.

This starting point has all of the content of your layout as displayed by the browser in normal flow.

![Layout Start](layout-task-start.png)

## Your Tasks

You now need to implement your layout. The tasks you need to achieve are:

1. To display the navigation items in a row, with an equal amount of space between the items.
2. The navigation bar should scroll with the content and then become stuck at the top of the viewport when it reaches it.
3. The image that is inside the article should have text wrapped around it.
4. The `<article>` and `<aside>` elements should display as a two column layout. The columns should be a flexible size so that if the browser window shrinks smaller the columns become narrower.
5. The photographs should display as a two column grid with a 1 pixel gap between the images.

You will not need to edit the HTML in order to achieve this layout and the techniques you should use are:

-   Positioning
-   Float
-   Flexbox
-   CSS Grid Layout

There are a few ways in which you could achieve some of these tasks, and there often isn’t a single right or wrong way to do things. Try a few different approaches and see which works best. Make notes as you experiment.
