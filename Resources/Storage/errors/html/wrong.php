<error-handler>
	<debugger-type-default>
		<style type="text/css"><?php include('full.css'); ?></style>
		<style type="text/css">.exc-message{text-align: center;font-size: 15px;}</style>
		<header>
			<div class="exception">
				<div class="exc-message">
					<h1> <?= $message ?> </h1>
					<?php if(!$description)  {
						echo "<h2 id='empty'></h2>";
					} else {
					echo "<h2>$description</h2>";
					}
					?>
				</div>
			</div>
		</header>
		<script>
			document.title = "Whoops, Something Seems Wrong";
		</script>
	</debugger-type-default>
</error-handler>