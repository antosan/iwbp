# Creating a business card

You will create a business card to test your comprehension of fundamental CSS theory, syntax and mechanics.

## How to download the starter files to your laptop

To get the starter files on your laptop, open your terminal and navigate to the `repos` folder:

```
cd ~/repos
```

Once in the `repos` folder, create a new folder called `business-card-assessment` by running the following command:

```
mkdir business-card-assessment
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

Next, while you are in the `iwbp` folder, you need to copy the starter files for the assessment from the `iwbp` folder into your `business-card-assessment` folder by running the following command:

```
cp business-card/* ../business-card-assessment
```

Now navigate to the `business-card-assessment` folder using the following command:

```
cd ../business-card-assessment
```

Login into your Github account and create a new public repository called `business-card-assessment`. Copy the link to your repository to the clipboard. It should look like this: `https://github.com/YOUR_GITHUB_USERNAME/business-card-assessment.git`.

Back on the terminal, ensure you are in the `~/repos/business-card-assessment` folder and run the following commands to convert your folder into a Git repository, commit the initial starter files and push them to Github:

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

You are provided with three files: `index.html`, `chris.jpg` and `style-resources.txt`. The text file contains a set of raw selectors and rulesets that you'll need to study and combine to answer part of this assessment.

NOTE: You don't need to edit the HTML in any way, except to apply the CSS to your HTML.

You should include `.card` at the start of the selector chain in all your rules, so that these rules wouldn't interfere with the styling of any other elements if the business card were to be put on a page with a load of other content.

## Instructions

You have been provided with some raw HTML and an image, and need to write the necessary CSS to style this into a nifty little online business card. The following sections describe what you need to do.

### Basic setup:

-   First of all, create a new file in the same directory as your HTML and image files. Call it something really imaginative like `style.css`.
-   Link your CSS to your HTML file via a `<link>` element.
-   The first two rulesets in the CSS resource file are yours, for FREE! After you've finished rejoicing at your good fortune, copy and paste them into the top of your new CSS file. Use them as a test to make sure your CSS is properly applied to your HTML.
-   Above the two rules, add a CSS comment with some text inside it to indicate that this is a set of general styles for the overall page. "General page styles" would do. Also add three more comments at the bottom of the CSS file to indicate styles specific to the setup of the card container, styles specific to the header and footer, and styles specific to the main business card contents. From now on, subsequent styles added to the stylesheet should be organized in an appropriate place.

### Taking care of the selectors and rulesets provided in the CSS resource file:

-   Next up, look at the four selectors, and calculate the specificity for each one. Write these down somewhere where they can be found later on, such as in a comment at the top of your CSS.
-   Now it's time to put the right selector on the right rule set! You've got four pairs of selector and ruleset to match in your CSS resources. Do this now, and add them to your CSS file. You need to:

    -   Give the main card container a fixed width/height, solid background color, border, and border-radius (rounded corners!), amongst other things.
    -   Give the header a background gradient that goes from darker to lighter, plus rounded corners that fit in with the rounded corners set on the main card container.
    -   Give the footer a background gradient that goes from lighter to darker, plus rounded corners that fit in with the rounded corners set on the main card container.
    -   Float the image to the right so that it sticks to the right hand side of the main business card contents, and give it a max-height of 100% (a clever trick that ensures that it will grow/shrink to stay the same height as its parent container, regardless of what height it becomes.)

-   Beware! There are two errors in the provided rulesets. Using any technique that you know, track these down and fix them before moving on.

### New rulesets you need to write:

-   Write a ruleset that targets both the card header, and card footer, giving them both a computed total height of 50px (including a content height of 30px and padding of 10px on all sides.) But express it in ems.
-   The default margin applied to the `<h2>` and `<p>` elements by the browser will interfere with our design, so write a rule that targets all these elements and sets their margin to 0.
-   To stop the image from spilling out of the main business card content (the `<article>` element), we need to give it a specific height. Set the `<article>`'s height to 120px, but expressed in ems. Also give it a background color of semi-transparent black, resulting in a slightly darker shade that lets the background red color shine through a bit too.
-   Write a ruleset that gives the `<h2>` an effective font size of 20px (but expressed in ems) and an appropriate line height to place it in the center of the header's content box. Recall from earlier that the content box height should be 30px — this gives you all the numbers you need to calculate the line height.
-   Write a ruleset that gives the `<p>` inside the footer an effective font size of 15px (but expressed in ems) and an appropriate line height to place it in the center of the footer's content box. Recall from earlier that the content box height should be 30px — this gives you all the numbers you need to calculate the line height.
-   As a last little touch, give the paragraph inside the `<article>` an appropriate padding value so that its left edge lines up with the `<h2>` and footer paragraph, and set its color to be fairly light so it is easy to read.

> **Note**: Bear in mind that the second ruleset sets font-size: 10px; on the <html> element — this means that for any descendants of <html>, an em will be equal to 10px rather than 16px as it is by default. (This is of course, provided the descendants in question don't have any ancestors sitting in between them and <html> in the hierarchy that have a different font-size set on them. This could affect the values you need, although in this simple example this is not an issue.)

## Example

The following screenshot shows an example of what the finished design should look like:

![Business Card](business-card.png)
