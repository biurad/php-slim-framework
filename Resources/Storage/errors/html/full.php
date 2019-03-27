<error-handler>
	<debugger-type-default>
		<style type="text/css"><?php include('full.css'); ?></style>
		<header>
			<div class="exception">
				<div class="exc-message">
					<h1><span style="color: #e95353;">Error:</span> <?= $message['message'] ?></h1>
				</div>
			</div>
		</header>
		<div class="frames-container exception">
			<div class="frame active">
				<div class="frame-file">
					<h1 class="frame-method-info">In file: </h1><h1 class="delimiter frame-method-info"><?= $message['file']?>, line <span style="color: #e95353;"><?= $message['line']?></span></h1>
				</div>
			</div>
		</div>
		<script>
			document.title = "Whoops, Something Seems Wrong";
		</script>
	</debugger-type-default>
</error-handler>
