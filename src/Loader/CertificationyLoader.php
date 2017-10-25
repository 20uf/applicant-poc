<?php

/*
 * This file is part of the Certificationy Applicant project.
 *
 * (c) Michael COULLERET <michael.coulleret@gmail.com>
 * (c) Mickaël Andrieu <andrieu.travail@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Applicant\Loader;

use Applicant\Transformer\QuestionsTransformer;
use Certificationy\Collections\Questions;
use Certificationy\Loaders\YamlLoader;
use Psr\Log\LoggerInterface;

/**
 * @author Michael COULLERET <michael.coulleret@gmail.com>
 */
class CertificationyLoader
{
    /**
     * @var YamlLoader
     */
    private $loader;

    /**
     * @var LoggerInterface
     */
    private $logger;

    public function __construct(LoggerInterface $logger, YamlLoader $loader)
    {
        $this->loader = $loader;
        $this->logger = $logger;
    }

    public function getCategories() : array
    {
        return $this->loader->categories();
    }

    /**
     * @throws \Exception if Loader can't load questions
     */
    public function getQuestions(int $number, array $categories = []) : Questions
    {
        try {
            $questions = $this->loader->load($number, $categories);

            return (new QuestionsTransformer())->transform($questions);
        } catch (\Exception $exception) {
            $this->logger->critical($exception->getMessage());
            throw $exception;
        }
    }
}
